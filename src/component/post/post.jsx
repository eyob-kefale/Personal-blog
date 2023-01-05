import './post.css'

export default function post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                src='https://media.istockphoto.com/id/519162052/photo/fast-coding.jpg?s=612x612&w=0&k=20&c=GQYnIlkFJve_XQlRjZX5klclnJuwZ-6esZwuLQkqcGQ='
                alt='React'
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">footBall</span>
                    <span className="postCats">Math</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum, dolor sit
                </span>
                <hr />
                <span className="postDate">1 minute ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat sed nam magni ratione corporis doloremque nihil nobis
                itaque esse vel libero at adipisci,
                laborum consectetur vitae corrupti? Eius, distinctio blanditiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat sed nam magni ratione corporis doloremque nihil nobis
                itaque esse vel libero at adipisci,
                laborum consectetur vitae corrupti? Eius, distinctio blanditiis.
                Lorem ipsum dolor sit amet consectetur adipisicing  elit.
                Repellat sed nam magni ratione corporis doloremque nihil nobis
                itaque esse vel libero at adipisci,
                laborum consectetur vitae corrupti? Eius, distinctio blanditiis.
            </p>
        </div>


    )
}
