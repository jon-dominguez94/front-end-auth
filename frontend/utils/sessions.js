export const postUser = user => (
  $.ajax({
    method: "post",
    url: 'api/users',
    data: { user }
  })
);

export const postSession = user => (
  $.ajax({
    method: 'post',
    url: 'api/session'
  })
);