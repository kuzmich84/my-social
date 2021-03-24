import React from "react";

const Post = (props) => {
    const {message, like, users} = props;

    return (
        <div className="post">
            <div className="post-heading">
                <div className="post-avature">
                    <img src={users.avatar} alt="ava"/>
                </div>
                <div className="post-title">
                    <h4> {users.name} </h4>
                    <p> 5 <span> hrs</span> <i className="uil-users-alt"></i></p>
                </div>
                <div className="post-btn-action">
                    <span className="icon-more uil-ellipsis-h" aria-expanded="false"></span>
                    <div className="mt-0 p-2 uk-dropdown" uk-dropdown="pos: top-right;mode:hover ">
                        <ul className="uk-nav uk-dropdown-nav">
                            <li><a href="#"> <i className="uil-share-alt mr-1"></i> Share</a></li>
                            <li><a href="#"> <i className="uil-edit-alt mr-1"></i> Edit Post </a></li>
                            <li><a href="#"> <i className="uil-comment-slash mr-1"></i> Disable comments
                            </a></li>
                            <li><a href="#"> <i className="uil-favorite mr-1"></i> Add favorites </a>
                            </li>
                            <li><a href="#" className="text-danger"> <i className="uil-trash-alt mr-1"></i>
                                Delete </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="post-description">
                {/*<div className="fullsizeimg">*/}
                {/*    <img src="assets/images/post/img-1.jpg" alt="img-1"/>*/}
                {/*</div>*/}
                {message}

                {/*<div className="post-state-details">*/}
                {/*    <div>*/}
                {/*        <img src="assets/images/icons/reactions_like.png" alt="iconlike"/>*/}
                {/*        <img src="assets/images/icons/reactions_love.png" alt="love"/>*/}
                {/*        <p> 13 </p>*/}
                {/*    </div>*/}
                {/*    <p> 24 Comments</p>*/}
                {/*</div>*/}

            </div>

            {/*<div className="post-state">*/}
            {/*    <div className="post-state-btns"><i className="uil-thumbs-up"></i> {like}<span> Liked </span>*/}
            {/*    </div>*/}
            {/*    <div className="post-state-btns"><i className="uil-heart"></i> 18 <span> Coments</span>*/}
            {/*    </div>*/}
            {/*    <div className="post-state-btns"><i className="uil-share-alt"></i> 193 <span> Shared*/}
            {/*                            </span>*/}
            {/*    </div>*/}
            {/*    <div className="post-state-btns"><i className="uil-bookmark"></i> 13 <span> Saved </span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="post-comments">*/}
            {/*    <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>*/}
            {/*    <div className="post-comments-single">*/}
            {/*        <div className="post-comment-avatar">*/}
            {/*            <img src="assets/images/avatars/avatar-5.jpg" alt="ava"/>*/}
            {/*        </div>*/}
            {/*        <div className="post-comment-text">*/}
            {/*            <div className="post-comment-text-inner">*/}
            {/*                <h6> Alex Dolgove</h6>*/}
            {/*                <p> Ut wisi enim ad minim laoreet dolore magna aliquam erat </p>*/}
            {/*            </div>*/}
            {/*            <div className="uk-text-small">*/}
            {/*                <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love*/}
            {/*                </a>*/}
            {/*                <a href="#" className=" mr-1"> Replay </a>*/}
            {/*                <span> 1d</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <a href="#" className="post-comment-opt"></a>*/}
            {/*    </div>*/}
            {/*    <div className="post-comments-single">*/}
            {/*        <div className="post-comment-avatar">*/}
            {/*            <img src="assets/images/avatars/avatar-2.jpg" alt="ava"/>*/}
            {/*        </div>*/}
            {/*        <div className="post-comment-text">*/}
            {/*            <div className="post-comment-text-inner">*/}
            {/*                <h6>Stella Johnson</h6>*/}
            {/*                <p> Ut wisi enim ad minim laoreet dolore <strong> David !</strong></p>*/}
            {/*            </div>*/}
            {/*            <div className="uk-text-small">*/}
            {/*                <a href="#" className="text-primary mr-1"> <i className="uil-thumbs-up"></i>*/}
            {/*                    Like*/}
            {/*                </a>*/}
            {/*                <a href="#" className=" mr-1"> Replay </a>*/}
            {/*                <span> 2d</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <a href="#" className="post-comment-opt"></a>*/}
            {/*    </div>*/}
            {/*    <div className="post-comments-single">*/}
            {/*        <div className="post-comment-avatar">*/}
            {/*            <img src="assets/images/avatars/avatar-3.jpg" alt="ava"/>*/}
            {/*        </div>*/}
            {/*        <div className="post-comment-text">*/}
            {/*            <div className="post-comment-text-inner">*/}
            {/*                <h6> Jonathan Madano </h6>*/}
            {/*                <p> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna*/}
            {/*                    aliquam*/}
            {/*                    erat*/}
            {/*                    volutpat.<strong> David !</strong></p>*/}
            {/*            </div>*/}
            {/*            <div className="uk-text-small">*/}
            {/*                <a href="#" className="text-danger mr-1"> <i className="uil-heart"></i> Love*/}
            {/*                </a>*/}
            {/*                <a href="#" className=" mr-1"> Replay </a>*/}
            {/*                <span> 3d</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <a href="#" className="post-comment-opt"></a>*/}
            {/*    </div>*/}


            {/*    <a href="#" className="view-more-comment"> Veiw 8 more Comments</a>*/}

            {/*    <div className="post-add-comment">*/}
            {/*        <div className="post-add-comment-avature">*/}
            {/*            <img src="assets/images/avatars/avatar-2.jpg" alt="ava"/>*/}
            {/*        </div>*/}
            {/*        <div className="post-add-comment-text-area">*/}
            {/*            <input type="text" placeholder="Write your comment..."/>*/}
            {/*            <div className="icons">*/}
            {/*                <span className="uil-link-alt"></span>*/}
            {/*                <span className="uil-grin"></span>*/}
            {/*                <span className="uil-image"></span>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}


        </div>
    )
};

export default Post;
