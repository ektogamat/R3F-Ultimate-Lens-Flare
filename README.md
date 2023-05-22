# ULTIMATE LENS FLARE FOR REACT THREE FIBER

#### by Anderson Mancini

[![twitter](https://flat.badgen.net/badge/twitter/@Andersonmancini/?icon&label)](https://twitter.com/Andersonmancini)

A EffectComposer Effect for React Three Post Processing, `Ultimate Lens flare` adds the optical aberration caused by the dispersion of light entering the lens through its edges.

[![screenshot](thumbnail.png)](https://ultimate-lens-flare.vercel.app)

[Click here to see an example](https://ultimate-lens-flare.vercel.app)

This captivating phenomenon creates a <strong>stunning optical effect</strong> that adds a touch of enchantment to your r3f projects, especially for sun lights. `Ultimate Lens Flare` creates mesmerizing circular or hexagonal bursts of light. Embrace the magic and elevate your projects with this unique and alluring effect. This captivating optical innovation introduces a new dimension to your content, amplifying its visual impact and captivating your audience.

Unlock a world of possibilities with Ultimate Lens Flare's intuitive interface. Seamlessly adjust parameters such as brightness, star points, glare size, ghosts, burst and much more, while real-time previews allow you to see the impact of your adjustments instantly. Embrace your creativity and effortlessly bring your artistic vision to life.

## More demos on CodeSandbox

- [Ultimate Lens Flare Text3D example](https://codesandbox.io/s/anderson-mancini-lens-flare-glass-text-example-9elqmx)

- [Ultimate Lens Flare simple example ](https://codesandbox.io/s/anderson-mancini-lens-flare-simple-example-ox6611)

- [Ultimate Lens Flare multiple materials example ](https://codesandbox.io/s/anderson-mancini-lens-lensflare-materials-example-4gjc16)

- [Ultimate Lens Flare Glass Dome example ](https://codesandbox.io/s/anderson-mancini-lens-lensflare-glass-dome-gjl302)

- [Ultimate Lens Flare StarWars Ship example ](https://codesandbox.io/s/anderson-mancini-lens-lensflare-starwars-example-qmpuj1)

### Customization options

Here you can watch a video of customization options. You can fully customize it
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/a4W4SUZ5uu8/0.jpg)](https://www.youtube.com/watch?v=a4W4SUZ5uu8)

# HOW TO USE?

### 1. Download the files component and save it on your project

[Download the Ultimate Lens Flare source code](https://gist.github.com/ektogamat/9b02bf248cab901b1175524b00742964) and save into your project

[Download the util source code](https://gist.github.com/ektogamat/18b84f5ad652091fe5a89555a5d30000) and <strong>save into your project in the same folder</strong> as the Ultimate Lens Flare is.

### 2. Import the component

```js
import LensFlare from './UltimateLensFlare'
// Remember to adjust the path to match your project's structure
```

### 3. Provide an image for the lens dirt as a prop and add this to your EffectComposer

You need to <strong>provide an image to act like a lens dirt filter</strong>. To implement this, supply an image with a 16:9 aspect ratio as a `dirtTextureFile` prop. It's important to keep the image size small to ensure efficient shader processing. You can find an example image in the public folder, but feel free to substitute it with any image of your choice. Remember to pass the file name as the `dirtTextureFile` prop, as demonstrated below.

```js
<EffectComposer>
  <LensFlare dirtTextureFile={'/lensDirtTexture.png'} />
</EffectComposer>
```

\*\*This is a mandatory parameter and it expects a path to find the file on your project. Don't need to load a texture using useTexture.

### And you are done ✨

---

# Changing the Blend Mode

With the aim of simplicity and user-friendliness, `Ultimate Lens Flare` seamlessly integrates into your workflow. It employs a custom shader pass on Effect Composer to effortlessly apply the lens flare effect by overlaying it on the scene.

Nevertheless, you have the flexibility to customize the effect to suit your specific requirements. The primary parameter that influences the overall appearance of the effect is the <strong>`blendFunction`</strong>. By default, this parameter is set to <strong>BlendFunction.NORMAL</strong>. However, you can modify it by providing a different blending mode through the blendFunction prop:

```js
<EffectComposer>
  <LensFlare dirtTextureFile={'/lensDirtTexture.png'} blendFunction={BlendFunction.PIN_LIGHT} />
</EffectComposer>
```

Unlock a world of stunning and diverse outcomes by exploring alternative Blend functions like `BlendFunction.PIN_LIGHT`, `BlendFunction.OVERLAY`, `BlendFunction.PIN_MULTIPLY`, and more. Import the BlendModes from post processing using `import { BlendFunction } from 'postprocessing'` to utilize these options. Prepare to be amazed by the myriad possibilities they offer.

# Using LEVA to adjust the parameters

Enjoy the convenience of fine-tuning various parameters within Ultimate Lens Flare. To simplify the process, import `folder` and `useControls` from `LEVA`. Copy and paste the following props to create an interactive interface for adjusting the values. Once you're satisfied with the results, manually transfer the values from the Leva controls back to the default value of useControls. Save your changes, and you're all set!

```js
import { folder, useControls } from 'leva'
```

```js
const lensFlareProps = useControls({
  LensFlare: folder(
    {
      enabled: { value: true, label: 'enabled?' },
      opacity: { value: 1.0, min: 0.0, max: 1.0, label: 'opacity' },
      position: { value: { x: -25, y: 6, z: -60 }, step: 1, label: 'position' },
      glareSize: { value: 0.35, min: 0.01, max: 1.0, label: 'glareSize' },
      starPoints: { value: 6.0, step: 1.0, min: 0, max: 32.0, label: 'starPoints' },
      animated: { value: true, label: 'animated?' },
      followMouse: { value: false, label: 'followMouse?' },
      anamorphic: { value: false, label: 'anamorphic?' },
      colorGain: { value: new Color(56, 22, 11), label: 'colorGain' },

      Flare: folder({
        flareSpeed: { value: 0.4, step: 0.001, min: 0.0, max: 1.0, label: 'flareSpeed' },
        flareShape: { value: 0.1, step: 0.001, min: 0.0, max: 1.0, label: 'flareShape' },
        flareSize: { value: 0.005, step: 0.001, min: 0.0, max: 0.01, label: 'flareSize' },
      }),

      SecondaryGhosts: folder({
        secondaryGhosts: { value: true, label: 'secondaryGhosts?' },
        ghostScale: { value: 0.1, min: 0.01, max: 1.0, label: 'ghostScale' },
        aditionalStreaks: { value: true, label: 'aditionalStreaks?' },
      }),

      StartBurst: folder({
        starBurst: { value: true, label: 'starBurst?' },
        haloScale: { value: 0.5, step: 0.01, min: 0.3, max: 1.0 },
      }),
    },
    { collapsed: true }
  ),
})
```

#### All parameters are self-explanatory. However, it's important to note some key details about certain parameters.

| Parameter       | Explanation                       |
| :-------------- | :-------------------------------- |
| colorGain       | Only accecpts RGB color format    |
| followMouse     | Can't work with occlusion         |
| anamorphic      | You should turn animation off     |
| dirtTextureFile | Can be changed to another texture |

# Ignoring occlusion on some objects

To disable the occlusion effect, simply add `userData={{ lensflare: 'no-occlusion' }}` to your object/mesh. This feature is particularly useful for creating realistic skyboxes in demos. By utilizing this setting, the internal raycaster of Ultimate Lens Flare will exclude the designated object/mesh from occlusion calculations.

# Improving performance

For optimal performance, it's crucial to employ the `<bvh><Scene></bvh>` structure when utilizing this occlusion detection effect. This setup ensures a faster response time and enhances overall performance.

In the event of performance challenges, consider adjusting the `dpr` (device pixel ratio) and disabling `multisampling` on the EffectComposer, if feasible. These adjustments can help reclaim performance resources and improve the overall experience.

⚠️ The `StarBurst` option is very intense for some GPU's to compute. If you have any issues with the performance, you can disable it. You can also use this drei component https://github.com/pmndrs/drei#performancemonitor to automatically disable this parameter when the performance drops.

# Follow the mouse cursor or Fake Sun Vector Position

You can enable the `followMouse` to use this effect as a 2D effect, ignoring completelly the occlusion. If set to true, it will ignore the vector position to fake the sun light.

```
<LensFlare followMouse={true} dirtTextureFile={'/lensDirtTexture.png'} />
```

You can also use a position `{x: NUMBER, y: NUMBER, z: NUMBER}` to pass a position in the 3D world so the effect can read that position and project it into the effect. In order for this to work, `followMouse` needs to be set to `false`

```
<LensFlare position={{x: 10, y: -5, z: 60}} dirtTextureFile={'/lensDirtTexture.png'} />
```

# Compatibility

`Ultimate Lens Flare` is compatible with all modern browsers that support WebGL 2.0 (WebGL 1 is not supported), using three.js version r152 or later is recommended.

# Limitations

The Ultimate Lens Flare leverages the raycaster to examine the material type of objects and determine if they are `MeshTransmissionMaterial` or `MeshPhysicalMaterial`. It checks for the transmission parameter to identify glass-like materials. Therefore, for an object to behave like glass, its material should have either `transmission = 1` or `transparent = true` and `opacity = NUMBER`. The effect automatically interprets the opacity `NUMBER` value to determine the brightness of the flare.

Furthermore, the internal raycaster is configured to consider only the firstHit of the raycaster. This means that if the first detected object is neither transparent nor transmissive, it will occlude the effect.

# Getting Started using this demo project

Download and install Node.js on your computer (https://nodejs.org/en/download/).

Then, open VSCODE, drag the project folder to it. Open VSCODE terminal and install dependencies (you need to do this only in the first time)

```
npm install
```

Run this command in your terminal to open a local server at localhost:8080

```
npm start
```

<hr/>

# License

A CC0 license is used for this project. You can do whatever you want with it, no attribution is required. However, if you do use it, I'd love to hear about it!

# Can you leave a star please?

I genuinely appreciate your support! If you're willing to show your appreciation, you can <strong>give me a star on GitHub 🎉 </strong>or consider buying a coffee to support my development at https://www.buymeacoffee.com/andersonmancini. The funds received will be utilized to create more valuable content about Three.js and invest in acquiring new courses. Thank you for your consideration!

# Credits

Hard to remember everything I read to achieve this, but here's a list of resources that have been helpful to me:

- https://www.shadertoy.com/view/4sK3W3
- https://www.shadertoy.com/view/4sX3Rs
- https://www.shadertoy.com/view/dllSRX
- https://www.shadertoy.com/view/Xlc3D2
- https://www.shadertoy.com/view/XtKfRV
- https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/
- https://blog.maximeheckel.com/posts/beautiful-and-mind-bending-effects-with-webgl-render-targets/
- https://docs.pmnd.rs/react-postprocessing/effects/custom-effects
- https://threejs.org/docs/index.html#manual/en/introduction/How-to-use-post-processing
- https://threejs.org/docs/index.html#manual/en/introduction/Matrix-transformations
- https://github.com/mrdoob/three.js/blob/master/examples/jsm/objects/Lensflare.js
- https://chat.openai.com/chat
- https://skybox.blockadelabs.com/

### Special thanks

Here is some of the many friends that helped me to achieve this effect:

- https://twitter.com/0xca0a
- https://github.com/abernier
- https://twitter.com/N8Programs
- https://twitter.com/MaximeHeckel
- https://twitter.com/spidersharma
- https://twitter.com/vis_prime
- https://twitter.com/Cody_J_Bennett
- https://twitter.com/0beqz
- https://twitter.com/maya_ndljk
- https://twitter.com/bruno_simon
- https://twitter.com/CantBeFaraz
- https://twitter.com/th_ebenezer
- https://github.com/alynevieira
