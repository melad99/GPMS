/* eslint-disable no-undef */
const posts = document.querySelector('.posts');
const tempPost = document.querySelector('#post-template');
const handlePosts = (data) => {
  if (data.status === 200) {
    posts.textContent = '';
    data.posts.forEach((post) => {
      const clone = tempPost.content.cloneNode(true);
      clone.querySelector('.wrap-post').setAttribute('data-index', post.id);
      clone.querySelector('.vote-count').textContent = Math.floor(Math.random() * 101);
      clone.querySelector('.post-publisher-name').textContent = post.username;
      clone.querySelector('.title').textContent = post.title;
      clone.querySelector('.content').textContent = post.content;
      posts.insertBefore(clone, posts.children[0]);
    });
  } else handleErrPages(500);
};

window.addEventListener('load', () => {
  getFetch('/api/v1/posts', handlePosts);
});

// show form
const wrapAddPost = document.querySelector('.wrap-add-post');
const postForm = document.querySelector('#add-post-form');
const error = document.querySelector('#error');
const addPost = document.querySelector('#add-post');
const closeForm = document.querySelector('.close');
const showAndCloseForm = () => {
  postForm.title.value = '';
  postForm.content.value = '';
  wrapAddPost.classList.toggle('show-form');
  document.body.classList.toggle('show-form');
};

addPost.addEventListener('click', showAndCloseForm);
closeForm.addEventListener('click', showAndCloseForm);

const handleAddPost = (data) => {
  if (data.status === 201) {
    showAndCloseForm();
    getFetch('/api/v1/posts', handlePosts);
  } else if (data.status === 400) {
    error.textContent = data.message;
  }
};
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    title: postForm.title.value.trim(),
    content: postForm.content.value.trim(),
  };

  if (data.title === '' || data.content === '') {
    error.textContent = 'All fields are required';
    return;
  }
  postFetch('/api/v1/post', data, handleAddPost);
});

// show user info
const userBtn = document.querySelector('.user-btn');
const userCard = document.querySelector('.user-card');
const usernameInfo = document.querySelector('.username');
const emailInfo = document.querySelector('.email');
const arrow = document.querySelector('.arrow');

const addUserInfo = (data) => {
  arrow.classList.toggle('arrow-rotate');
  userCard.classList.toggle('show');
  usernameInfo.textContent = data.user[0].username;
  emailInfo.textContent = data.user[0].email;
};
userBtn.addEventListener('click', () => {
  getFetch(`/api/v1/user/${user.id}`, addUserInfo);
});

// Delete Post
const deleteMyPosts = (data) => {
  if (data.status === 200) {
    getFetch(`/api/v1/user/${user.id}`, showMyPosts);
  }
};
const deletePost = (id) => {
  getFetch(`/api/v1/post/${id}`, deleteMyPosts);
};

document.addEventListener('click', (e) => {
  if (Array.from(e.target.classList).includes('delete-post')) {
    const id = e.target.getAttribute('data-index');
    deletePost(id);
  }
});

// show my posts
const wrapMyPosts = document.querySelector('.wrap-my-posts');
const myPosts = document.querySelector('.my-posts');
const tempMyPost = document.querySelector('#my-post-template');
const myPostsBtn = document.querySelector('.my-posts-btn');
const closeMyPosts = document.querySelector('.close-my-posts');

const showMyPosts = (data) => {
  if (data.status === 200) {
    if (!data.user.length) {
      myPosts.textContent = '';
      const text = document.createElement('div');
      text.textContent = 'You have no posts yet';
      myPosts.appendChild(text);
    } else {
      myPosts.textContent = '';
      data.user.forEach((post) => {
        if (post.title && post.content) {
          const clone = tempMyPost.content.cloneNode(true);
          clone.querySelector('.wrap-post').setAttribute('data-index', post.postid);
          clone.querySelector('.vote-count').textContent = Math.floor(Math.random() * 101);
          clone.querySelector('.post-publisher-name').textContent = post.username;
          clone.querySelector('.title').textContent = post.title;
          clone.querySelector('.content').textContent = post.content;
          clone.querySelector('.delete-post').setAttribute('data-index', post.postid);
          myPosts.insertBefore(clone, myPosts.children[0]);
        } else {
          const text = document.createElement('div');
          text.textContent = 'You have no posts yet';
          myPosts.appendChild(text);
        }
      });
    }
  } else handleErrPages(500);
};

const showAndCloseMyPost = () => {
  wrapMyPosts.classList.toggle('show-form');
  document.body.classList.toggle('show-form');
};
myPostsBtn.addEventListener('click', () => {
  showAndCloseMyPost();
  getFetch(`/api/v1/user/${user.id}`, showMyPosts);
});

closeMyPosts.addEventListener('click', () => {
  showAndCloseMyPost();
  getFetch('/api/v1/posts', handlePosts);
});
