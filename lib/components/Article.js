import React from 'react';

// Some inline styling option - simple and powerful.
// Keep style object on the top level - NOT in the component. React will 
// not create style object on each re-render. 
const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.85em',
    color: '#888'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20
  }
};

export default function Article(props) {
  const { article, store } = props;
  const author = store.lookUpAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{article.date}</div>
      <div style={styles.author}>
        <a href={author.website}>{author.firstName} {author.lastName}</a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
}
