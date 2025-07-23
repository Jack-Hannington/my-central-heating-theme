// Toggle menu

const menu = document.querySelector(".menu-container");

//Check is admin bar is shown - if it then add additional class to container-fluid so it doesn't overlap
document.addEventListener("DOMContentLoaded", function(event) {
  if (document.querySelector("#wpadminbar")) {
  console.log('admin bar is shown');
  document.querySelector('nav').classList.add('admin-margin');
  // document.querySelector('.menu-container').classList.add('admin-margin');
}

// Alert bar is now in normal document flow - no JavaScript needed for positioning
});


document.querySelector("#showMenu").addEventListener("click", () => {
  document.body.style.overflowY = "hidden"; //Prevent scrolling when animating
  menu.classList.remove("show", "animate__fadeOutUp");
  menu.classList.add("show", "animate__fadeInDown", "animate__animated");
});

document.querySelector("#closeMenu").addEventListener("click", () => {
  menu.classList.add("animate__fadeOutUp");
  setTimeout(function () {
    document.body.style.overflowY = "auto";
    menu.classList.remove("show");
  }, 500);
});

const mediaQueryList = window.matchMedia('(min-width: 1000px)');
const checkViewportWidth = () => {
    if (mediaQueryList.matches) {
        // If viewport is 1000px or wider, remove the class
        menu.classList.remove('animate__fadeOutUp');
        // menu.classList.remove('admin-margin');
    } else {
        // If viewport is less than 1000px wide, add the class
        menu.classList.add('animate__fadeOutUp');
        // menu.classList.add('admin-margin');
    }
};

// Call the function once at script load time
checkViewportWidth();

// Then set it up to be called every time the viewport width changes
mediaQueryList.addEventListener('change', checkViewportWidth);

document.addEventListener("DOMContentLoaded", function() {
  // Get all menu items that have children
  var menuItems = document.querySelectorAll('.menu-item-has-children');

  // Add Iconify icon to each of them
  menuItems.forEach(function(menuItem) {
      var menuItemLink = menuItem.querySelector('a');
      menuItemLink.insertAdjacentHTML('beforeend', '<span class="iconify" data-icon="tabler:chevron-down"></span>');
      
      // Get the icon within the menu item with a delay of 300ms
      setTimeout(function() {
        var menuItemIcons = document.querySelectorAll('.menu-item-has-children>a>svg');

        // Add click event to the menu item link
        menuItemLink.addEventListener('click', function(event) {
            // Prevent the page from navigating to the link on click
            event.preventDefault();

            // Get the sub-menu of the clicked menu item
            var subMenu = menuItem.querySelector('.sub-menu');

            // Toggle the display of the sub-menu
            subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
            
            // Add this css to the icon   transform: rotate(180deg); 
            
            menuItemIcons.forEach(icon => icon.classList.toggle('rotate-icon'));
            
            // Prevent this event from bubbling up to the li
            event.stopPropagation();
        });
      }, 300); // Delay of 300ms
  });
});



// Add active class to Altius clinics slider
jQuery(document).ready(function($) {
  $('#altiusClinics').on('slide.bs.carousel', function (e) {
    var index = $(e.relatedTarget).index();
    $('.carousel-button').removeClass('active');
    $('.carousel-button[data-bs-slide-to="' + index + '"]').addClass('active');
  });
});


// Convert classes to data-aos animations 
window.addEventListener('DOMContentLoaded', (event) => {
  const blocks = document.querySelectorAll('.wp-block-group');
   
  blocks.forEach((block) => {
      block.classList.forEach((className) => {
          if (className.startsWith('aos-')) {
              const animationName = className.split('aos-')[1];
              block.dataset.aos = animationName;
              block.classList.remove(className);
          }
      });
  });

  AOS.init({
      once: true,
      duration: 700,
  });
});



// Postcode logic 

const eligiblePostcodes = [
  "BL7", "BL1", "BL6", "BL4", "BL8", "BL9", "BL0", "BL2", "BL3", "BL5",
  "M19", "M24", "M26", "M31", "M16", "M28", "M33", "M32", "M43", "M44",
  "M7", "M4", "M11", "M21", "M25", "M3", "M5", "M1", "M13", "M22", "M34",
  "M35", "M46", "M90", "M18", "M50", "M12", "M15", "M20", "M6", "M27", "M29",
  "M41", "M23", "M2", "M9", "M40", "M30", "M45", "M8", "M14", "M17", "M38",
  "OL12", "OL6", "OL5", "OL3", "OL10", "OL4", "OL1", "OL14", "OL11", "OL16",
  "OL15", "OL2", "OL9", "OL8", "OL13", "OL7", "SK15", "SK5", "SK13", "SK12",
  "SK16", "SK8", "SK7", "SK11", "SK17", "SK4", "SK3", "SK14", "SK6", "SK2",
  "SK22", "SK9", "SK1", "SK23", "SK10", "WA12", "WA5", "WA1", "WA7", "WA11",
  "WA3", "WA8", "WA10", "WA2", "WA9", "WA14", "WA16", "WA15", "WA13", "WA4",
  "WA6", "WN6", "WN8", "WN1", "WN5", "WN2", "WN4", "WN7", "WN3", "WV15",
  "WV8", "WV1", "WV2", "WV3", "WV9", "WV7", "WV11", "WV13", "WV14", "WV12",
  "WV16", "WV4", "WV5", "WV10", "WV6", "WR2", "WR5", "WR15", "WR11", "WR12",
  "WR14", "WR8", "WR1", "WR6", "WR7", "WR4", "WR9", "WR3", "WR10", "WR13",
  "YO10", "YO42", "YO31", "YO51", "YO15", "YO61", "YO19", "YO23", "YO7",
  "YO25", "YO32", "YO16", "YO60", "YO1", "YO11", "YO24", "YO21", "YO62",
  "YO12", "YO17", "YO43", "YO14", "YO22", "YO13", "YO18", "YO26", "YO30",
  "YO41", "YO8"
];


function checkPostcode(postcode) {
  const firstTwoChars = postcode.substring(0, 2).toUpperCase();
  return eligiblePostcodes.some(pc => pc.startsWith(firstTwoChars));
}

function showFormWithPostcode(postcode) {
  const hiddenForm = document.getElementById('hidden-form');
  const formIframe = document.getElementById('formIframe');
  
  hiddenForm.style.display = 'block';
  formIframe.src = `https://tally.so/embed/wLPLPJ?postcode=${postcode}&alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
}

function hideForm() {
  document.getElementById('hidden-form').style.display = 'none';
}

function handlePostcodeSubmission(postcode) {
  if (checkPostcode(postcode)) {
    localStorage.setItem('userPostcode', postcode);
    showFormWithPostcode(postcode);
    document.getElementById('postcodeCheckContainer').style.display = 'none';
    document.getElementById('editPostcodeContainer').classList.add('d-none');

    // Hide the not-covered div if it's currently visible
    const notCoveredDiv = document.querySelector('.not-covered');
    if (notCoveredDiv) {
      notCoveredDiv.classList.add('d-none');
    }

  } else {
    document.querySelector('.not-covered').classList.remove('d-none');
    hideForm();
    document.getElementById('postcodeCheckContainer').style.display = 'none';
    showEditPostcodeContainer(postcode);
  }
}


function showEditPostcodeContainer(postcode) {
  const editContainer = document.getElementById('editPostcodeContainer');
  const displayedPostcode = document.getElementById('displayedPostcode');
  editContainer.classList.remove('d-none');
  displayedPostcode.textContent = postcode;
}

document.addEventListener('DOMContentLoaded', () => {
  const storedPostcode = localStorage.getItem('userPostcode');
  if (storedPostcode && checkPostcode(storedPostcode)) {
    showFormWithPostcode(storedPostcode);
  } else {
    document.getElementById('postcodeCheckContainer').style.display = 'block';
  }
});

document.getElementById('submitPostcode').addEventListener('click', () => {
  const userPostcode = document.getElementById('postcodeInput').value;
  handlePostcodeSubmission(userPostcode);
});

document.getElementById('editPostcodeButton').addEventListener('click', () => {
  const editedPostcode = document.getElementById('editPostcodeInput').value;
  handlePostcodeSubmission(editedPostcode);
});




