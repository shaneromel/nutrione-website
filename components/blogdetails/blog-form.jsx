import React from 'react';

const BlogForm = () => {
    return (
        <div className="post-comment-form">
            <h3>Post Comment</h3>
            <div className="blog-comment-form">
                <form action="#">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="single-input-field field-message">
                                <textarea name="message" id="message"
                                    placeholder="Type your comments...."></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="single-input-field field-name">
                                <input type="text" placeholder="Type your name...." />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="single-input-field field-email">
                                <input type="text" placeholder="Type your email...." />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="single-input-field field-website">
                                <input type="text" placeholder="Type your website...." />
                            </div>
                        </div>

                    </div>
                    <div className="comment-btn mt-10">
                        <a href="#" className="fill-btn"><i className="fas fa-comments"></i><span>Get a
                            Quote</span></a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;