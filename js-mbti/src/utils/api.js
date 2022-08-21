const API_END_POINT = "http://localhost:3001/";

const cache = {};

const apiRequest = async (url) => {
  // if (cache[url]) return cache[url];
  try {
    const res = await fetch(url);

    if (res.ok) {
      const json = await res.json();
      cache[url] = json;
      return json;
    }

  } catch (err) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
}

export const fetchQnA = async () => apiRequest(API_END_POINT + "QnA");

export const fetchResult = async () => apiRequest(API_END_POINT + "Result");