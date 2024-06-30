export default ({ router, siteData }: { router: any; siteData: any }) => {
  if (typeof window !== 'undefined') {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
    const encoded = btoa(`${username}:${password}`);

    fetch(window.location.href, {
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    }).then((response) => {
      if (!response.ok) {
        alert('Authentication failed');
        window.location.href = 'about:blank'; // 認証失敗時にアクセスを拒否
      }
    });
  }
};
