const checkAuthorOwnAlbum = (authorId, album) => {
    return authorId === album.album_created_by._id.toString();
}

module.exports = { checkAuthorOwnAlbum }