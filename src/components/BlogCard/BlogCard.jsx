import { formatDate } from 'utils/formatDistanceToNow';
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

export const BlogCard = (props) => {
  const { poster, tag, title, description, userName, avatar, postedAt, } = props
  return (
    <Card>
  <CardHeader>
    <CardPoster
          src={ poster}
      alt={poster}
    />
  </CardHeader>
  <CardBody>
        <Tag>{ tag}</Tag>
        <CardTitle>{ title}</CardTitle>
    <CardText>
     {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
          <Avatar src={avatar} alt={userName } />
      <UserInfo>
            <UserName>{ userName}</UserName>
            <Date>{ formatDate(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
  );
};
