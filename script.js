// script.js
document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  var companies = document.getElementById('companies').getElementsByClassName('company');

  searchInput.addEventListener('input', function() {
    filterCompanies();
  });

  for (var i = 0; i < companies.length; i++) {
    companies[i].addEventListener('click', function() {
      var details = this.getElementsByClassName('details')[0];
      if (details.style.display === 'none') {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    });
  }
});

function filterCompanies() {
  var input, filter, companies, company, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  companies = document.getElementById('companies').getElementsByClassName('company');

  for (i = 0; i < companies.length; i++) {
    company = companies[i];
    txtValue = company.dataset.name;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      company.style.display = '';
    } else {
      company.style.display = 'none';
    }
  }
}

function sortCompanies() {
  var sortSelect = document.getElementById('sortSelect');
  var sortOption = sortSelect.value;
  var sortParts = sortOption.split('-');
  var sortField = sortParts[0];
  var sortOrder = sortParts[1];
  var companiesContainer = document.getElementById('companies');
  var companies = Array.from(companiesContainer.getElementsByClassName('company'));

  if (sortField === 'alphabetical') {
    companies.sort(function(a, b) {
      var nameA = a.dataset.name.toUpperCase();
      var nameB = b.dataset.name.toUpperCase();
      if (sortOrder === 'ascending') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  } else {
    companies.sort(function(a, b) {
      var ratingA = parseInt(a.dataset[sortField]);
      var ratingB = parseInt(b.dataset[sortField]);
      if (sortOrder === 'ascending') {
        return ratingA - ratingB;
      } else {
        return ratingB - ratingA;
      }
    });
  }

  // Remove all companies from container
  while (companiesContainer.firstChild) {
    companiesContainer.removeChild(companiesContainer.firstChild);
  }

  // Append sorted companies to container
  companies.forEach(function(company) {
    companiesContainer.appendChild(company);
  });
}


function showInformation() {
  var info = document.getElementById('information');
  var contactForm = document.getElementById('contactForm');
  if (info.style.display === 'none') {
    info.style.display = 'block';
    contactForm.style.display = 'none';
  } else {
    info.style.display = 'none';
  }
}

function contactUs() {
  window.location.href = "mailto:cc@outlook.com";
}
