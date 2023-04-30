import { TweenMax } from "gsap/gsap-core";
import { Expo } from "gsap";
import * as THREE from "three";
import { gsap } from "gsap";
export default class Slider {
    constructor(background, container, delay = 0, displacementMap, duration = 1, images, intensity = 0.3, width=100, height=100, className = "special") {
      let imagesContainer = []
      for (let i = 0; i < images.length; ++i){
        imagesContainer.push(images[i])
      }
      this.className = className;
      this.width = width
      this.height = height
      this.delay = delay
      this.duration = duration
      this.displacementIntensity = intensity
      this.bgColor = background
      
      this.current = 0
      this.isAnimating = false
      this.autoUpdateDelay = 3000
      
      /**  */
      this.renderer = this.createRenderer(container)
      this.images = this.loadImages(imagesContainer, displacementMap)
      this.scene = this.createScene()
      this.camera = this.createCamera()
      this.material = this.createMaterial()
      this.geometry = this.createGeometry()
      this.mesh = this.createMesh()
      
      this.scene.add(this.mesh)
      
      this.bindMethods()
      this.render()  
      this.renderer.domElement.addEventListener('webglcontextlost', function(e) {
        //this.render()  
      });
      //this.intervalID = setInterval(this.next, this.autoUpdateDelay)
    }
    
    
    /** Create a renderer */
    createRenderer(container) {
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
      })
      
      renderer.setPixelRatio(window.devicePixelRatio)
      //renderer.setClearColor(0x000000, 0)
      renderer.setSize(this.width, this.height)
      let node = renderer.domElement
      node.classList.add(this.className);
      container.appendChild(node);
      
      return renderer
    }
    
    
    /** Create a scene */
    createScene() {
      const scene = new THREE.Scene()
      var backcode = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC";
      //scene.background = new THREE.Color(this.bgColor)
      scene.background = new THREE.TextureLoader().load(backcode);
      scene.matrixWorldAutoUpdate = true;
      return scene
    }
    
    
    /** Create a camera */
    createCamera() {
      const camera = new THREE.OrthographicCamera(
        this.width / -2,
        this.width / 2,
        this.height / 2,
        this.height / -2,
        0.1, 
        1000
      )
        
      camera.position.z = 1
      
      return camera
    }
    
    
    /** Load images */
    loadImages(HTMLImages, HTMLDisplacementMapImage) {
      const images = []
      const loader = new THREE.TextureLoader()
      loader.crossOrigin = 'anonymous'
      
      HTMLImages.forEach(image => {
        const newImage = loader.load(image.getAttribute('src') + '?v=' + Date.now())
        
        //newImage.magFilter = THREE.LinearFilter
        //newImage.minFilter = THREE.LinearFilter
        //newImage.anisotropy = this.renderer.capabilities.getMaxAnisotropy()
        
        images.push(newImage)
      })
      
      this.displacementMap = loader.load(HTMLDisplacementMapImage.getAttribute('src') + '?v=' + Date.now())
      this.displacementMap.magFilter = THREE.LinearFilter
      this.displacementMap.minFilter = THREE.LinearFilter
      this.displacementMap.anisotropy = this.renderer.capabilities.getMaxAnisotropy()
      
      return images
    }
    
    
    /** Create a material */
    createMaterial() {
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uDisplacementFactor: { type: 'f', value: 0.0 },
          uDisplacementIntensity: { type: 'f', value: this.displacementIntensity },
          uDisplacementMap: { type: 't', value: this.displacementMap },
          uDisplacementDirection: { type: 'f', value: 0.0 },
          uCurrentImage: { type: 't', value: this.images[0] },
          uNextImage: { type: 't', value: this.images[1] }
        },
        vertexShader: this.getVertexShader(),
        fragmentShader: this.getFragmentShader(),
        transparent: true,
        opacity: 1.0
      })
      
      
      return material
    }
    
    
    /** Create a vertex shader */
    getVertexShader() {
      return `
        varying vec2 vUv;
  
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
        }
      `
    }
    
    
    /** Create a fragment shader */
    getFragmentShader() {
      return `
        varying vec2 vUv;
        
        uniform sampler2D uCurrentImage;
        uniform sampler2D uNextImage;
        uniform sampler2D uDisplacementMap;
        uniform float uDisplacementFactor;
        uniform float uDisplacementIntensity;
        uniform float uDisplacementDirection;
  
        void main() {
          vec4 displacementMap = texture2D(uDisplacementMap, vUv) * uDisplacementIntensity;
          vec4 currentVUvY;
          vec4 nextVUvY;
  
          if (uDisplacementDirection > 0.0) {
            currentVUvY = vUv.y + uDisplacementFactor * displacementMap;
            nextVUvY = vUv.y - (1.0 - uDisplacementFactor) * displacementMap;
          } else {
            currentVUvY = vUv.y - uDisplacementFactor * displacementMap;
            nextVUvY = vUv.y + (1.0 - uDisplacementFactor) * displacementMap;
          }
  
          vec4 currentImage = texture2D(uCurrentImage, vec2(
            vUv.x,
            currentVUvY
          ));
  
          vec4 nextImage = texture2D(uNextImage, vec2(
            vUv.x,
            nextVUvY
          ));
  
          gl_FragColor = mix(currentImage, nextImage, uDisplacementFactor);
        }
      `
    }
    
    
    /** Create a geometry */
    createGeometry() {
      const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, 1)
      
      return geometry
    }
    
    
    /** Create a mesh */
    createMesh() {
      const mesh = new THREE.Mesh(this.geometry, this.material)
      
      return mesh
    }
    
    
    /** Render */
    render() {
      requestAnimationFrame(this.render)
      
      this.renderer.render(this.scene, this.camera)
    }
    
    
    /** Next image */
    next() {
      if (this.isAnimating) return
      
      this.current >= this.images.length - 1 ? (this.current = 0) : this.current++
      this.material.uniforms.uDisplacementDirection.value = 1.0
         
      this.change()
    }

    /** Current img */

    change_img(imgNum){
      if (this.isAnimating) return
      this.current = imgNum;
      this.material.uniforms.uDisplacementDirection.value = 1.0
      console.log(this.material.uniforms.uDisplacementDirection)
      this.change()
    }
    
    
    /** Next image */
    prev() {
      if (this.isAnimating) return
      
      this.current === 0 ? (this.current = this.images.length - 1) : this.current--
      this.material.uniforms.uDisplacementDirection.value = 0.0
         
      this.change()
    }
    cleanMaterial = (material) => {
      console.log('dispose material!')
      this.material.dispose()

      // dispose textures
      for (const key of Object.keys(material)) {
        const value = material[key]
        if (value && typeof value === 'object' && 'minFilter' in value) {
          console.log('dispose texture!')
          value.dispose()
        }
      }
    };
    clearThree = () => {
      this.renderer.dispose()

      this.scene.traverse(object => {
        if (!object.isMesh) return
        
        console.log('dispose geometry!')
        object.geometry.dispose()

        if (object.material.isMaterial) {
          this.cleanMaterial(object.material)
        } else {
          // an array of materials
          for (const material of object.material) this.cleanMaterial(material)
        }
      })
      return;
    };
    /** Change slide */
    change() {
      
      this.isAnimating = true
      //clearInterval(this.intervalID)
      
      this.material.uniforms.uNextImage.value = this.images[this.current]
      this.material.uniforms.uNextImage.needsUpdate = true
      
      gsap.to(this.material.uniforms.uDisplacementFactor, this.duration, {
        value: 1,
        delay: this.delay,
        onComplete: () => {

          this.material.uniforms.uCurrentImage.value = this.images[this.current]
          this.material.uniforms.uCurrentImage.needsUpdate = true
          this.material.uniforms.uDisplacementFactor.value = 0.0
          this.isAnimating = false
          //this.clearThree();
        }
      })
    
    }
    
    
    /** Bind events */
    bindMethods() {
      this.render = this.render.bind(this)
      this.next = this.next.bind(this)
      this.prev = this.prev.bind(this)
    }
  }