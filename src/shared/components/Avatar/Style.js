const styles = (theme) =>
  StyleSheet.create({
    container: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: theme.colors.secondary,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,

      borderWidth: 1,
    },
    actionSheet: {
      backgroundColor: theme.colors.secondary,
    },
    text: {
      color: theme.colors.text,
    },
  });

export default styles;