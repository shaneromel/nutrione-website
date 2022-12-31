import Link from 'next/link';
import React from 'react';

const BlogTag = () => {
    return (
        <div className="sidebar-widget sidebar-tags mb-50">
            <h4 className="sidebar-widget-title">Tags</h4>
            <div className="sidebar-tag-list">
                <Link href="/blog"><a className="tag">Popular</a></Link>
                <Link href="/blog"><a className="tag">Design</a></Link>
                <Link href="/blog"><a className="tag">UX</a></Link>
                <Link href="/blog"><a className="tag">Usability</a></Link>
                <Link href="/blog"><a className="tag">Develop</a></Link>
                <Link href="/blog"><a className="tag">Icon</a></Link>
                <Link href="/blog"><a className="tag">Business</a></Link>
                <Link href="/blog"><a className="tag">Consult</a></Link>
                <Link href="/blog"><a className="tag">Kit</a></Link>
                <Link href="/blog"><a className="tag">Keyboard</a></Link>
                <Link href="/blog"><a className="tag">Mouse</a></Link>
                <Link href="/blog"><a className="tag">Tech</a></Link>
            </div>
        </div>
    );
};

export default BlogTag;