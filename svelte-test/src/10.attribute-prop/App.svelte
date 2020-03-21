<script>
  let pp = 1;
  let clickable = false;
</script>

<div>
  <div class="foo">
    <button disabled>can't touch this</button>
  </div>
  <div>
    <input type="checkbox" />
  </div>
  <div>
    <a href="page/{pp}">page {pp}</a>
  </div>
  <div>
    <button disabled={!clickable}>...</button>
  </div>
</div>
