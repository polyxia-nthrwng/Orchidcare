let modelStage1, modelStage2;
    let classIndicesStage1, classIndicesStage2;

    async function loadModels() {
      // Load models
      modelStage1 = await tf.loadLayersModel("model/stage1/model.json");
      modelStage2 = await tf.loadLayersModel("model/stage2/model.json");

      // Load class indices
      classIndicesStage1 = await fetch("model/stage1/stage1_classes.json").then(r => r.json());
      classIndicesStage2 = await fetch("model/stage2/stage2_classes.json").then(r => r.json());

      console.log("Models and classes loaded!");
    }

    // Preprocess image
    function preprocessImage(img, size = 260) {
    const image = tf.browser.fromPixels(imgElement)
    .resizeNearestNeighbor([260, 260])
    .toFloat()
    .div(255.0)
    .expandDims(0);
      return tensor;
    }

    document.getElementById("imageInput").addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = async () => {
        const inputTensor = preprocessImage(img, 260);

        // Stage 1: Leaf detection
        const predStage1 = modelStage1.predict(inputTensor);
        const probsStage1 = await predStage1.data();
        const classIdxStage1 = probsStage1.indexOf(Math.max(...probsStage1));
        const labelStage1 = Object.keys(classIndicesStage1).find(key => classIndicesStage1[key] === classIdxStage1);
        const confStage1 = (probsStage1[classIdxStage1] * 100).toFixed(2);

        let output = `<p><b>Stage 1:</b> ${labelStage1} (${confStage1}%)</p>`;

        if (labelStage1 === "leaf") {
          // Stage 2: Disease classification
          const predStage2 = modelStage2.predict(inputTensor);
          const probsStage2 = await predStage2.data();
          const classIdxStage2 = probsStage2.indexOf(Math.max(...probsStage2));
          const labelStage2 = Object.keys(classIndicesStage2).find(key => classIndicesStage2[key] === classIdxStage2);
          const confStage2 = (probsStage2[classIdxStage2] * 100).toFixed(2);

          output += `<p><b>Stage 2:</b> ${labelStage2} (${confStage2}%)</p>`;
        } else {
          output += `<p>Not a leaf, skipping Stage 2.</p>`;
        }

        document.getElementById("result").innerHTML = output;

        tf.dispose([inputTensor, predStage1]); // cleanup
      };
    });

    loadModels();