# Changes

This is the first time I've contributed to someone elses repo. I came across this app and thought I'd have a go.

I refactored in some places, rearranging some of the useEffect hooks and functions they use.

I removed where the local storage is set to NA and initiate user as null.

## FIX: Adding a theme using the personalize button on the dashboard

This would overwrite the previous themes in the array instead of adding to them.

I fixed (in Personalize.jsx) by setting theme in storage to themeChoice instead of user.theme. This is because the setUser() wouldn't have updated yet and will still hold the previous state.

    setUser({ ...user, theme: themeChoice });
    user.theme  // this won't have the new them choice yet

## Using all image themes

I couldn't see where all user themes were used so I added a random number to pick one from the array each time.

## FIX Style Warning

This was causing a warning in the dev tool console:

    background: `url(${bg})`,

I changed it to this:

    backgroundImage: `url(${bg})`,

I was saying something about using shorthand to set background property. This also seemed to fix a strange re-rendering of background image that was happening.
