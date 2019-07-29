const li = document.getElementsByClassName('student-item cf')
const mainDiv = document.querySelector('.page')

//showPage takes the page number and hides all list items save for 10
function showPage(pageNumber) {
   pageNumber = (pageNumber - 1)*10
   for(i=0; i<li.length; i++) {
      if (i >= pageNumber && i <= pageNumber + 9) {
         li[i].style.display = ''
      } else {
         li[i].style.display = 'none';
      }
   }
}

//appendPageLinks adds links to the bottom of the page based on the length of list items
function appendPageLinks() {
   for(i=1; i<=(Math.ceil(li.length/10)); i++) {
      pageBtn = document.createElement('button')
      pageBtn.className = 'pagination'
      pageBtn.textContent = i
      mainDiv.appendChild(pageBtn)
   }
}

//handles pagination button clicks
mainDiv.addEventListener('click', function(e) {
   if(e.target.tagName === 'BUTTON') {
      pageNumber = (parseInt(e.target.textContent))
      showPage(pageNumber)
   }
});

//initializes pagination at page 1
showPage(1)
appendPageLinks()
