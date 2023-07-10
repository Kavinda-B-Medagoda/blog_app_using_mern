import React from 'react'

function Post() {
  return (
    <div>
        <div className="entry">
            <div className="image">
                <img src="https://i.ytimg.com/vi/e_wlmBv_ry8/maxresdefault.jpg" alt="" />
            </div>
            <div className="content">
                <h2>HONDA Activa 6G</h2>
                <p className="info">
                <a href="author">kavinda medagoda</a>
                <time>2023-04-06 16:40</time>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse pariatur impedit, expedita perferendis maiores porro. Earum beatae aspernatur expedita nulla debitis voluptatum libero quaerat molestiae unde a deserunt distinctio omnis, nemo quam ducimus minima similique culpa, laboriosam architecto consectetur eius doloribus quas voluptate rerum! Quam velit beatae ut quaerat.</p>
            </div>
        </div>
    </div>
  )
}

export default Post;