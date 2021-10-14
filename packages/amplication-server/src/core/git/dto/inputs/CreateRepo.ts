import { Field, InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true
})
export class RepoCreateInput {
  @Field(() => String, {
    nullable: false
  })
  name!: string;

  @Field(() => String, {
    nullable: false
  })
  org!: string;
}
