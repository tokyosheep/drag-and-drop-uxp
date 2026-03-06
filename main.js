
const { entrypoints } = require("uxp");

  showAlert = () => {
    alert("This is an alert message");
  }

  entrypoints.setup({
    commands: {
      showAlert,
    },
    panels: {
      vanilla: {
        show(node ) {
        }
      }
    }
  });


document.getElementById("dropzone").addEventListener("drop", async (e) => {
  console.log(e.dataTransfer.getData("text"));
  console.log(e);
  // telling the data set on the dragged element.
  alert("droped " + e.dataTransfer.getData("text"));
});

document.getElementById("dropzone").addEventListener("dragover", (e) => {
  e.preventDefault();
  // console.log(e);
});

Array.from(document.getElementsByClassName("box")).forEach((box) => {
  console.log(box);
  box.addEventListener("drag", (e) => {

  });
  box.addEventListener("dragstart", (e) => {
    // set data on the element you dragged 
    e.dataTransfer.setData("text/plain", "red box");
  });

  box.addEventListener("dragend", (e) => {
    console.log("end");
  });
});

/**
 *
 *
 * @param {*} e
 */
registerDragEvent = () => {
  const nativeZone = document.getElementById("dropzone-native");
  nativeZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });
    nativeZone.addEventListener("drop", (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.uxpEntries);
      console.log(files);
      const draglist = document.getElementById("filelist");
      // removing all previous list
      while (draglist.firstChild) {
        draglist.firstChild.remove();
      }
      // listing dropped native files
      files.forEach(f => {
        const naitivePath = f.nativePath;
        const li = document.createElement("li");
        li.textContent = naitivePath;
        draglist.appendChild(li);
      })
    });
}

registerDragEvent();

window.addEventListener("message", async e => {
  const data = JSON.parse(e.data);
  console.log(data);
  alert(data.msg);
});