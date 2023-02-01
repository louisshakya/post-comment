import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { useState } from "react";

import "./post.css";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const onValuesChange = (_, allValues) => {
    setTitle(allValues.title);
    setName(allValues.name);
    setContent(allValues.content);
  };

  const onFinish = () => {
    if (title && content) {
      dispatch(postAdded(title, name, content));
      setTitle("");
      setName("");
      setContent("");
      form.setFieldsValue({ title: "", name: "", content: "" });
    }
  };

  return (
    <section>
      <div className="post-form">
        <h2>Add a New Post</h2>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Form.Item
            label="Post Title:"
            name="title"
            rules={[{ required: true, message: "Please enter a title!" }]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item label="Name:" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="Content:"
            name="content"
            rules={[{ required: true, message: "Please enter a content!" }]}
          >
            <Input.TextArea
              autoSize={{ minRows: 3, maxRows: 5 }}
              className="content-input"
              placeholder="Type Your Post Here!"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default AddPostForm;
