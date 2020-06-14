//Grab user for new, session login, session logout

export const createUser = user => {
  return $.ajax ({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
};

export const loginUser = user => {  
  return $.ajax ({
    method: "POST",
    url: "/api/session",
    data: { user }
  })
}

export const logoutUser = () => {
  return $.ajax ({
    method: "DELETE",
    url: "/api/session"
  })
}

export const updateUser = user => {
  return $.ajax ({
    method: "PATCH",
    url: `/api/user/${user.id}`,
    data: { user }
  })
}