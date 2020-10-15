import * as views from ".";

export default st => `
${views[st.view](st)}
`;
