import { BoolConst, NumberConst, StringConst } from "../const/const";

export class CurriculumItem {
    constructor() {
      this.clientId = NumberConst.zero;
      this.code = StringConst.empty;
      this.createdAt = StringConst.empty;
      this.description = StringConst.empty;
      this.id = NumberConst.zero;
      this.isCurriculum = BoolConst.false;
      this.name = StringConst.empty;
      this.status = {
        id: NumberConst.zero,
        name: StringConst.empty,
        catalogId: NumberConst.zero,
      };
      this.statusId = NumberConst.zero;
      this.updatedAt = StringConst.empty;
    }
  }