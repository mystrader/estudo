$(document).ready(function() {
 
    // DataTable
    var table = $('table').DataTable({
        
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "zeroRecords": "Nenhum registro encontrado",
            "info": "Exibindo Página _PAGE_ de _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        },
        bSortCellsTop: true,
        dom:
		"<'row'<'col-sm-6'l><'col-sm-6'>>" +
		"<'row'<'col-sm-12'tr>>" +
		"<'row'<'col-sm-5'i><'col-sm-7'p>>",
	    renderer: 'bootstrap',
    });
    
 
    // Apply the search
    $.each($('.filterrow th', table.table().header()), function () {
        var column = table.column($(this).index());

        $( 'input', this).on( 'keyup change', function () {
            if ( column.search() !== this.value ) {
                column
                    .search( this.value )
                    .draw();
            }
        } );
    } );
//
//    // Apply the search
//    $.each($('.select-filter', table.table().header()), function () {
//        var column = table.column($(this).index());
//
//        $( 'select', this).on( 'change', function () {
//            if ( column.search() !== this.value ) {
//                column
//                    .search( this.value, "^1$", true, false)// a busca nos selects deve ser feita de maneira exata, por isso setamos o atributo smart como false 
//                    .draw();
//
//            } else if ( column.search() !== "" ) {
//                column
//                    .draw();
//            }
//        } );
//    } );
    
    $('table tbody [aria-label="actions"]').each(function(){
        var btnWidth = $(this).find('.btn').outerWidth() + 6;
        var actionsCount = $(this).find('.btn').length;
        var tBarWidth = btnWidth * actionsCount;
        
        $(this).css("width", tBarWidth);
        
        
    });
    
    
} );