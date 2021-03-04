import React ,{useState} from 'react';
import {Row, Col} from "reactstrap";
import {RiSendPlaneFill} from "react-icons/ri";
import "./content.css";
export default function Content() {
  const [isopen, setIsopen] = useState(false); 
  const data = [
    {
      title: " Post title 1",
      author: "John Smith",
      dateCreate: "Sep 20, 2021",
      tag: [
        {
          title: "magenta"
        },
        {
          title: "red"
        },
        {
          title: "volcano"
        },
        {
          title: "orange"
        }
      ],
      textStatus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu  pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleif tristique, tortor mauris molestie elit, et lacinia ipsum quam dui.",
    },
    {
      comment: [
        {
          name: "Han Solo 1",
          comment: "We supply a series of design principles, practical patterns and hight quality design resouces (Sketch and Axure), to help people create their product prototypes beautifully and effientyl.",
          date: "a day ago"
        },
        {
          name: "Han Solo 2",
          comment: "We supply a series of design principles, practical patterns and hight quality design resouces (Sketch and Axure), to help people create their product prototypes beautifully and effientyl.",
          date: "2 day ago"
        }
      ]
    }
  ]
  const showComment = () => {
    setIsopen(!isopen)
  }
  return (
    <div className="Content">
      <div className="content_title">
        {data[0].title}
      </div>
      <div>
        <Row className="Content_left" >
          <Col lg={6} md={6} ms={6} xs={6} className="Content_left_Author"  style={{paddingLeft:"40px"}} >
            <div >Author: {data[0].author}</div>
            <div>Created at: {data[0].dateCreate}</div>
          </Col>
          <Col lg={6} md={6} ms={6} xs={6} className="Content_left_tag" style={{ paddingRight:"40px", display:"flex", justifyContent:"flex-end" }} >
            {data[0].tag.map((item, index) => (
              <div key={index}>
                <button className="Content_tag_name">
                {item.title}
                </button>
            </div>
            ))}
          </Col>
        </Row>
      </div>
      <div className="Content_main">
          {data[0].textStatus}
      </div>
      <div className="Content_replies">
        <div className="Content_replies_div">
          <span onClick={()=> showComment()} style={{cursor: "pointer"}}>{data[1].comment.length} replies</span>
          <input type="text" className="inputComment" placeholder="comment..." style={{border:"none", fontSize:"16px"}} />
          <RiSendPlaneFill size="3rem" color="black" style={{paddingBottom:"10px", cursor: "pointer"}} />
        </div>
      </div>
      <div className="Content_comment" style={{ display:`${isopen ? "block" : "none"}`}}>
        {data[1].comment.map((item, index) => (
          <Row className="comment_row" key={index}>
            <Col lg={1} md={1} ms={1} xs={2}>
              <img src="/avatar.png" alt="avt" width="50px"  />
            </Col>
            <Col lg={9} md={9} ms={9} xs={9}>
              <div>
                <span className="comment_name">{item.name}</span> 
                <span className="comment_day">{item.date}</span>
              </div>
              <div className="comment_content">
                {item.comment}
              </div>
              <div  className="comment_reply">
                Reply to
              </div>
            </Col>
          </Row>
        ))}   
      </div>
    </div>
  )
}
