// $(document).ready(function() {
//   $('#clickable').click(function() {
//       alert('You clicked me!')
//   });
// });

var x = document.getElementById('clickable');
document.addEventListener('click', eventAlert, false);

function eventAlert() {
  alert('Yay, you clicked me!!');
}
