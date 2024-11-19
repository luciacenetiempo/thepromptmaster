const BASE_URL = 'http://blog.thepromptmaster.it/wp-json/wp/v2';

export async function getPosts(page) {
  const postsRes = await fetch(BASE_URL + '/posts?_embed&per_page=15&page='+ page);
  const posts = await postsRes.json();
  return posts;
}

export async function getSticky() {
  const postsRes = await fetch(BASE_URL + '/posts?_embed&sticky=true');
  const posts = await postsRes.json();
  return posts;
}

export async function getNoSticky() {
  const postsRes = await fetch(BASE_URL + '/posts?_embed&sticky=false');
  const posts = await postsRes.json();
  return posts;
}

export async function getCategories() {
  const catRes = await fetch(BASE_URL + '/categories?_embed');
  // console.log(postsRes.json());
  const posts = await catRes.json();
  return posts;
}

export async function getCategory(slug) {
  const catRes = await fetch(BASE_URL + '/categories?_embed&slug='+slug);
  // console.log(postsRes.json());
  const posts = await catRes.json();
  return posts;
}

export async function getPostFromCategory(id) {
  const postsRes = await fetch(BASE_URL + '/posts?_embed&categories='+id);
  // console.log(postsRes.json());
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  // const posts = await getPosts(1);
  // const postArray = posts.filter((post) => post.slug == slug);
  // const post = postArray.length > 0 ? postArray[0] : null;
  // return post;

  let pageNumber = 1;
  let post = null;
  while (true) {
    const posts = await getPosts(pageNumber);
    if (posts.length === 0) {
      break;
    }
    const postArray = posts.filter(post => post.slug === slug);
    if (postArray.length > 0) {
      post = postArray[0];
      break;
    }
    pageNumber++;
  }

  return post;
}
export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + '/events?_embed');
  const events = await eventsRes.json();
  return events;
}
 
export async function getEvent(slug) {
  const events = await getEvents();
  const eventArray = events.filter((event) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}
 
export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getPosts(1);
      break;
    case 'events':
      elements = await getEvents();
      break;    
    case 'category':
      elements = await getCategories();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}


export function getDate(date) {
  return new Date(date).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
