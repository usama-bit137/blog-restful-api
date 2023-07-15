// import { useState, useEffect } from 'react';
import Header from './components/Header';
import Blog from './components/Blog';
export default function App() {
  // API request working...
  // const APIFetch = async () => {
  //   let blogs = await fetch('/api/v1/posts');
  //   const blogsData = await blogs.json();
  //   return blogsData.posts;
  // };

  // const blogsFurnish = () => {
  //   APIFetch().then((res) =>
  //     res.posts.map((item) => {
  //       return <Blog title={item.title} bodyText={item.bodyText} />;
  //     })
  //   );
  // };

  return (
    <div className="App">
      <Header />
      {/* {blogsFurnish} */}
      <Blog
        title="Lorem Ipsum Dolor"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla ac mauris a ullamcorper. Vestibulum varius maximus metus vitae volutpat. In hac habitasse platea dictumst. Donec sagittis sit amet quam ut bibendum. Duis tempor diam ut dui mollis finibus. Suspendisse eget pellentesque mi. Fusce sagittis sed mauris et mattis. Donec rutrum eu neque nec vehicula. Ut leo dui, vehicula vitae tempor ut, aliquam a mauris. Praesent gravida purus non blandit dapibus. Proin elementum est at bibendum lobortis. Nullam maximus, sapien auctor aliquet condimentum, nisi enim sagittis quam, tristique malesuada nisi sem dignissim orci. Nulla vel eros sapien. Duis arcu nisl, bibendum eget elementum vitae, ultricies a justo. Cras ullamcorper enim a mauris finibus, non interdum leo fermentum. Nulla consequat tristique purus."
      />
      <Blog
        title="Lorem Ipsum Dolor"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla ac mauris a ullamcorper. Vestibulum varius maximus metus vitae volutpat. In hac habitasse platea dictumst. Donec sagittis sit amet quam ut bibendum. Duis tempor diam ut dui mollis finibus. Suspendisse eget pellentesque mi. Fusce sagittis sed mauris et mattis. Donec rutrum eu neque nec vehicula. Ut leo dui, vehicula vitae tempor ut, aliquam a mauris. Praesent gravida purus non blandit dapibus. Proin elementum est at bibendum lobortis. Nullam maximus, sapien auctor aliquet condimentum, nisi enim sagittis quam, tristique malesuada nisi sem dignissim orci. Nulla vel eros sapien. Duis arcu nisl, bibendum eget elementum vitae, ultricies a justo. Cras ullamcorper enim a mauris finibus, non interdum leo fermentum. Nulla consequat tristique purus."
      />
      <Blog
        title="Lorem Ipsum Dolor"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla ac mauris a ullamcorper. Vestibulum varius maximus metus vitae volutpat. In hac habitasse platea dictumst. Donec sagittis sit amet quam ut bibendum. Duis tempor diam ut dui mollis finibus. Suspendisse eget pellentesque mi. Fusce sagittis sed mauris et mattis. Donec rutrum eu neque nec vehicula. Ut leo dui, vehicula vitae tempor ut, aliquam a mauris. Praesent gravida purus non blandit dapibus. Proin elementum est at bibendum lobortis. Nullam maximus, sapien auctor aliquet condimentum, nisi enim sagittis quam, tristique malesuada nisi sem dignissim orci. Nulla vel eros sapien. Duis arcu nisl, bibendum eget elementum vitae, ultricies a justo. Cras ullamcorper enim a mauris finibus, non interdum leo fermentum. Nulla consequat tristique purus."
      />
    </div>
  );
}
