$(document).ready(() => {
    $('.delete-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id');
        // Make AJAX request
        $.ajax({
            type: 'DELETE',
            url: '/todo/delete/' + id,
            success: (response) => {
                alert('Deleting Todo');
                window.location.href = '/';
            },
            error: (error) => {
                console.log(error);
            }
        });
    });
});