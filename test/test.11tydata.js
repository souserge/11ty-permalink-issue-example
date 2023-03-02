module.exports = {
  layout: "base.njk",
  pageDataAll: [
    { name: "foo" },
  ],
  eleventyComputed: {
    permalink: (data) => `/${data.pageData.name}/`,
    nestedDoubleName: (data) => ({ name: data.pageData.name + data.pageData.name }),
    computedProp: (data) => {
      console.log("Computing computedProp");
      console.log(data);
      const { nestedDoubleName } = data;
      // // Uncomment this if block to avoid the error
      // if (!nestedDoubleName) {
      //   console.log("nestedDoubleName is not available, returning...");
      //   return ":(";
      // }

      console.log("trying to run toUpperCase...");
      return nestedDoubleName.name.toUpperCase();
    }
  }
}
