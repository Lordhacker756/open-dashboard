# Changes

I couldn't recreate the original issue but I looked through your code and thought I would have a little go at contributing, this is my first time.

I refactored in some places, rearranging some of the useEffect hooks and functions they use.

I don't think its necessary to set the local storage properties to NA so I made some changes around that too. You can check if the property exists if you need to use it in a condition. eg:

    if (!localStorage.getItem("name")) {
      // not stored in local storage
    }

## FIX

I noticed this bug while playing around with the dashboard.

### Adding a theme using the personalize button on the dashboard didn't add the new theme.

I fixed (in Personalize.jsx) by setting theme in storage to themeChoice instead of user.theme. This is because the setUser() wouldn't have updated yet and will still hold the previous state.

    setUser({ ...user, theme: themeChoice });
    user.theme  // this won't have the new them choice yet

## Notes

- I noticed that some of the lighter background images make it hard to see the hamburger and cog icons.
- There are three themes allowed to be saved, but how are these used?
