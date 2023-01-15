// NiceSelect.bind(
//     document.getElementById("test-select"), {
//     searchable: false,
//     placeholder: 'select',
//     searchtext: 'zoek',
//     selectedtext: 'geselecteerd'
// });
// NiceSelect.bind(
//     document.getElementById("test-select1"), {
//     searchable: false,
//     placeholder: 'select',
//     searchtext: 'zoek',
//     selectedtext: 'geselecteerd'
// });
const customsSelects = document.querySelectorAll('.custom-select');
if (customsSelects) {
    customsSelects.forEach(select => {
        NiceSelect.bind(
            select, {
            searchable: false,
            placeholder: 'select',
            searchtext: 'zoek',
            selectedtext: 'geselecteerd'
        });
    })
}