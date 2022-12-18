const checkAuthorOwnPost = (authorId, post) => {
    return authorId === post.post_created_by?._id.toString();
}

module.exports = { checkAuthorOwnPost }