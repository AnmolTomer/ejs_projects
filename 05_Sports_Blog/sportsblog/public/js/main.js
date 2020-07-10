$(document).ready(() => {
    $('.category-delete').on('click', (e) => { // Class of delete category on the event click call AJAX
        $target = $(e.target)
        $.ajax({
            type: 'DELETE', // AJAX request of type delete
            url: '/categories/delete/' + $target.attr('data-cat-id'), // Pass the url
            success: (response) => {
                alert('Category Removed') // console.log on success and redirect
                window.location.href = '/manage/categories'
            },
            error: (error) => { // if error in that case print error
                console.error(error)
            }
        })
    })
    // Delete article from route /articles/edit/:id

    $('.article-delete').on('click', (e) => { // Class of delete category on the event click call AJAX
        $target = $(e.target)
        $.ajax({
            type: 'DELETE', // AJAX request of type delete
            url: '/articles/delete/' + $target.attr('data-article-id'), // Pass the url
            success: (response) => {
                alert('Article Removed') // console.log on success and redirect
                window.location.href = '/manage/articles'
            },
            error: (error) => { // if error in that case print error
                console.error(error)
            }
        })
    })
})