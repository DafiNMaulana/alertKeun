// // *** Setup variable ***
// const btn = document.querySelectorAll('button.btn-modal');
// const modal = document.querySelectorAll('div.modalskeun');
// const modalContent = document.querySelectorAll('div.modal-content');
// const closeBtn = document.querySelectorAll('button.close-btn');

// for (let i = 0; i < btn.length; i++) {
//   console.log(i)
//   console.log(btn.item(i))
//   btn.item(i).onclick = () => {
    
//     if(btn.item(i).getAttribute('data-mk-target') && modal.item(i).id) {
//       modal.item(i).style.display = "flex";
//       modalContent.item(i).classList.remove('fade-top-out')
//       modalContent.item(i).classList.add('fade-top');
//     } else {
//       alert('bruh')
//     }
//     alert(modal.item(i).id)
//   }

//   let modalDismiss = closeBtn.item(i).getAttribute('data-mk-dismiss');
//   closeBtn.item(i).onclick = () => {
//     if (modalDismiss == 'modal') {
//       modalContent.item(i).classList.add('fade-top-out')
//       modal.item(i).style.display = "none";
//     }
//   }
//   console.log(closeBtn.item(i))
  
// }