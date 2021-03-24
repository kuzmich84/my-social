import React from "react"
import Post from "./post/post"

const Profile = (props) => {
    const {posts, friends, addPost, updateNewPostText, updatePost, users} = props
    const element = React.createRef()
    const submitPost = () => {
        if (element.current.value) addPost()
    }

    const onPostChange = () => {
        let text = element.current.value
        updateNewPostText(text)
    }
    return (

        <div className="main_content_inner pt-0">
            <div className="profile">
                <div className="profile-cover">
                    <img src="assets/images/avatars/profile-cover.jpg" alt=""/>

                    <a href="#"> <i className="uil-camera"></i> Edit </a>
                </div>

                <div className="profile-details">
                    <div className="profile-image">
                        <img src="assets/images/avatars/avatar-2.jpg" alt=""/>
                        <a href="#"> </a>
                    </div>
                    <div className="profile-details-info">
                        <h1> Josephine Williams </h1>
                        <p> Family , Food , Fashion , Fourever <a href="#">Edit </a></p>
                    </div>

                </div>
            </div>
            <div className="section-small">

                <div uk-grid="" className="uk-grid">
                    <div className="uk-width-2-3@m fead-area uk-first-column">

                        <div className="post-new">
                            <div className="post-new-media">
                                <div className="post-new-media-user">
                                    <img src="assets/images/avatars/avatar-2.jpg" alt="avatar-2"/>
                                </div>
                                <div className="post-new-media-input">
                                    <input ref={element} type="text" className="uk-input" value={updatePost} onChange={onPostChange} placeholder="What's Your Mind ? Dennis!"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="post-new-type">

                                <a href="#">
                                    <img src="assets/images/icons/photo.png" alt="photo-2"/>
                                    Photo/Video
                                </a>

                                <a href="#" className="uk-visible@s">
                                    <img src="assets/images/icons/tag-friend.png" alt="friend"/>
                                    Tag Friend
                                </a>

                                <button onClick={submitPost} className="button outline-light circle" type="button" style={{borderColor: `#e6e6e6`, borderWidth: `1px`}}
                                        aria-expanded="false">Public
                                </button>

                            </div>


                        </div>
                        {posts.map((post) => <Post key={post.id} message={post.message} like={post.likesCount} users={users[0]}/>)}
                    </div>


                    <div className="uk-width-expand ml-lg-2">


                        <h3> About </h3>
                        <div className="list-group-items">
                            <i className="uil-home-alt"></i>
                            <h5> Live in <span> Cairo , Eygept </span></h5>
                        </div>

                        <div className="list-group-items">
                            <i className="uil-location-point"></i>
                            <h5> From <span> Aden , Yemen </span></h5>
                        </div>

                        <div className="list-group-items">
                            <i className="uil-heart"></i>
                            <h5> in a <span> Relationship </span></h5>
                        </div>


                        <div className="list-group-items">
                            <i className="uil-rss"></i>
                            <h5> Flowwed by <span> 3,240 </span> <span> Peaple </span></h5>
                        </div>

                        <a href="#" className="button soft-primary block my-3"> edit </a>

                        <hr className="mt-3 mb-0"/>


                        <div className="section-header">
                            <div className="section-header-left">
                                <h3 className="mb-0"> Friends </h3>
                                <p className="uk-text-small"> {friends.length} friends</p>
                            </div>
                            <div className="section-header-right">
                                <a href="#" className="see-all text-primary"> See all</a>
                            </div>
                        </div>

                        <div className="uk-child-width-1-3 uk-grid-small uk-grid-match uk-grid" uk-grid="">
                            {friends.map((friend) => {
                                return (
                                    <div className="uk-first-column" key={friend.id}>

                                        <a href="#" className="profile-friend-card">
                                            <div className="profile-friend-card-thumbnail">
                                                <img src={friend.avatar} alt="www"/>
                                            </div>
                                            <div className="profile-friend-card-content">
                                                <h4> {friend.name} </h4>
                                            </div>
                                        </a>

                                    </div>
                                )
                            })}
                        </div>
                        <a href="#" className="button secondary block my-3"> See All </a>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Profile
