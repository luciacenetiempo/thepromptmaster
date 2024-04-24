"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.getSticky = getSticky;
exports.getNoSticky = getNoSticky;
exports.getCategories = getCategories;
exports.getCategory = getCategory;
exports.getPostFromCategory = getPostFromCategory;
exports.getPost = getPost;
exports.getEvents = getEvents;
exports.getEvent = getEvent;
exports.getSlugs = getSlugs;
exports.getDate = getDate;
var BASE_URL = 'http://blog.thepromptmaster.it/wp-json/wp/v2';

function getPosts(page) {
  var postsRes, posts;
  return regeneratorRuntime.async(function getPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(BASE_URL + '/posts?_embed&per_page=15&page=' + page));

        case 2:
          postsRes = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(postsRes.json());

        case 5:
          posts = _context.sent;
          return _context.abrupt("return", posts);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getSticky() {
  var postsRes, posts;
  return regeneratorRuntime.async(function getSticky$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch(BASE_URL + '/posts?_embed&sticky=true'));

        case 2:
          postsRes = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(postsRes.json());

        case 5:
          posts = _context2.sent;
          return _context2.abrupt("return", posts);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getNoSticky() {
  var postsRes, posts;
  return regeneratorRuntime.async(function getNoSticky$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch(BASE_URL + '/posts?_embed&sticky=false'));

        case 2:
          postsRes = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(postsRes.json());

        case 5:
          posts = _context3.sent;
          return _context3.abrupt("return", posts);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function getCategories() {
  var catRes, posts;
  return regeneratorRuntime.async(function getCategories$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch(BASE_URL + '/categories?_embed'));

        case 2:
          catRes = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(catRes.json());

        case 5:
          posts = _context4.sent;
          return _context4.abrupt("return", posts);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function getCategory(slug) {
  var catRes, posts;
  return regeneratorRuntime.async(function getCategory$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(fetch(BASE_URL + '/categories?_embed&slug=' + slug));

        case 2:
          catRes = _context5.sent;
          _context5.next = 5;
          return regeneratorRuntime.awrap(catRes.json());

        case 5:
          posts = _context5.sent;
          return _context5.abrupt("return", posts);

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function getPostFromCategory(id) {
  var postsRes, posts;
  return regeneratorRuntime.async(function getPostFromCategory$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(fetch(BASE_URL + '/posts?_embed&categories=' + id));

        case 2:
          postsRes = _context6.sent;
          _context6.next = 5;
          return regeneratorRuntime.awrap(postsRes.json());

        case 5:
          posts = _context6.sent;
          return _context6.abrupt("return", posts);

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function getPost(slug) {
  var pageNumber, post, posts, postArray;
  return regeneratorRuntime.async(function getPost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          // const posts = await getPosts(1);
          // const postArray = posts.filter((post) => post.slug == slug);
          // const post = postArray.length > 0 ? postArray[0] : null;
          // return post;
          pageNumber = 1;
          post = null;

        case 2:
          if (!true) {
            _context7.next = 16;
            break;
          }

          _context7.next = 5;
          return regeneratorRuntime.awrap(getPosts(pageNumber));

        case 5:
          posts = _context7.sent;

          if (!(posts.length === 0)) {
            _context7.next = 8;
            break;
          }

          return _context7.abrupt("break", 16);

        case 8:
          postArray = posts.filter(function (post) {
            return post.slug === slug;
          });

          if (!(postArray.length > 0)) {
            _context7.next = 12;
            break;
          }

          post = postArray[0];
          return _context7.abrupt("break", 16);

        case 12:
          console.log(pageNumber);
          pageNumber++;
          _context7.next = 2;
          break;

        case 16:
          return _context7.abrupt("return", post);

        case 17:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function getEvents() {
  var eventsRes, events;
  return regeneratorRuntime.async(function getEvents$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(fetch(BASE_URL + '/events?_embed'));

        case 2:
          eventsRes = _context8.sent;
          _context8.next = 5;
          return regeneratorRuntime.awrap(eventsRes.json());

        case 5:
          events = _context8.sent;
          return _context8.abrupt("return", events);

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function getEvent(slug) {
  var events, eventArray, event;
  return regeneratorRuntime.async(function getEvent$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(getEvents());

        case 2:
          events = _context9.sent;
          eventArray = events.filter(function (event) {
            return event.slug == slug;
          });
          event = eventArray.length > 0 ? eventArray[0] : null;
          return _context9.abrupt("return", event);

        case 6:
        case "end":
          return _context9.stop();
      }
    }
  });
}

function getSlugs(type) {
  var elements, elementsIds;
  return regeneratorRuntime.async(function getSlugs$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          elements = [];
          _context10.t0 = type;
          _context10.next = _context10.t0 === 'posts' ? 4 : _context10.t0 === 'events' ? 8 : _context10.t0 === 'category' ? 12 : 16;
          break;

        case 4:
          _context10.next = 6;
          return regeneratorRuntime.awrap(getPosts(1));

        case 6:
          elements = _context10.sent;
          return _context10.abrupt("break", 16);

        case 8:
          _context10.next = 10;
          return regeneratorRuntime.awrap(getEvents());

        case 10:
          elements = _context10.sent;
          return _context10.abrupt("break", 16);

        case 12:
          _context10.next = 14;
          return regeneratorRuntime.awrap(getCategories());

        case 14:
          elements = _context10.sent;
          return _context10.abrupt("break", 16);

        case 16:
          elementsIds = elements.map(function (element) {
            return {
              params: {
                slug: element.slug
              }
            };
          });
          return _context10.abrupt("return", elementsIds);

        case 18:
        case "end":
          return _context10.stop();
      }
    }
  });
}

function getDate(date) {
  return new Date(date).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
} // export async function getSortedPostsData(endPath) {
//   let url = 'http://blog.thepromptmaster.it/wp-json/wp/v2/'+endPath
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }
// export async function getAllPostIds(endPath) {
//   let url = 'http://blog.thepromptmaster.it/wp-json/wp/v2/'+endPath
//   const res = await fetch(url);
//   const data = await res.json();
//   return data.map(item => {
//       return {
//         params: {
//           id: item.slug,
//         }
//       }
//   });
// }
// export async function getPostData(endPath) {
//   let url = 'https://be.baround.it/index.php/wp-json/wp/v2/'+endPath
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }