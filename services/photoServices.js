const checkAuthorOwnPhoto = (authorId, photo) => {
    return authorId === photo.photo_created_by._id.toString();
}

module.exports = { checkAuthorOwnPhoto }