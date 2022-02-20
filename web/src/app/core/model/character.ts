import { Entity } from './entity';

export class Character extends Entity {
  static entityType = 'character';

  name: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  wikiUrl: string;

  constructor(json?: any) {
    super(json);

    if (json) {
      this.id = json._id;
      this.name = json.name;
      this.height = json.height;
      this.race = json.race;
      this.gender = json.gender;
      this.birth = json.birth;
      this.spouse = json.spouse;
      this.death = json.death;
      this.realm = json.realm;
      this.hair = json.hair;
      this.wikiUrl = json.wikiUrl
    }
  }
}
