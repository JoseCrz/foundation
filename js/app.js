$(document).foundation()
alert("HOLI")

$('[data-toggle-dia]').click(function onclick (ev) {
  panel = $(this).data('toggleDia')
  $('#lineup-tabs').foundation('selectTab', panel)
})
