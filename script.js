<!-- Add this before </body> -->
<script>
  const searchBtn = document.querySelector('.search-box button');
  const searchInput = document.querySelector('.search-box input');

  searchBtn.addEventListener('click', () => {
    alert(`Searching for: ${searchInput.value}`);
  });
</script>

