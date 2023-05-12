const interestCheckboxes = document.querySelectorAll('.interest__check');

interestCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    const nestedInterests = this.parentElement.nextElementSibling;

    if (this.checked) {
      const nestedCheckboxes = nestedInterests.querySelectorAll('.interest__check');
      nestedCheckboxes.forEach((nestedCheckbox) => {
        nestedCheckbox.checked = true;
      });
    }
    else {
      const nestedCheckboxes = nestedInterests.querySelectorAll('.interest__check');
      nestedCheckboxes.forEach((nestedCheckbox) => {
        nestedCheckbox.checked = false;
      });
    }
  });
});
