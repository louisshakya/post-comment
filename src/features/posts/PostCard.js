import { Card } from "antd";
import { Comment, Tooltip } from "antd";
import { formatDistanceToNow, parseISO } from "date-fns";

import "./post.css";

const PostCard = ({ props }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Comment
        // actions={actions}
        author={
          <h3>
            <p>Posted By: {props.name ? props.name : "Unknown Author"}</p>
          </h3>
        }
        content={
          <Card
            title={props.title}
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <p>{props.content.substring(0, 100)}</p>
          </Card>
        }
        datetime={
          <Tooltip title={parseISO(props.date).toDateString()}>
            <span>{formatDistanceToNow(parseISO(props.date))} ago</span>
          </Tooltip>
        }
      />
    </div>
  );
};

export default PostCard;
