export const UserCard = () => {
  return (
    <div>
      <img
        src="https://source.unsplash.com/400x300/?dog"
        alt="プロフィール"
        onError={(e) => (e.target.src = "https://via.placeholder.com/400x300")} // エラー時の代替画像
      />
      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>1111@aaa.com</dd>
        <dt>TEL</dt>
        <dd>000-9999-88888</dd>
        <dt>会社名</dt>
        <dd>Defact</dd>
        <dt>WEB</dt>
        <dd>htttttt.com</dd>
      </dl>
    </div>
  );
};
