import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../components/atoms/button/SecondaryButton";
import { PrimaryOption } from "../components/atoms/option/PrimaryOption";
import { SearchInput } from "../components/molecules/SearchInput";
import { UserCard } from "../components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <PrimaryOption>
        <option value="">fff</option>
        <option value="option1">wws</option>
      </PrimaryOption>
      <UserCard />
    </div>
  );
}
