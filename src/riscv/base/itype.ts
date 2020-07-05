import { DebugInfo } from '../../types';
import { Expression } from '../../expr';
import { between } from '@jupitersim/helpers';
import { Instruction, BuildError } from '../instruction';
import { OPCODE, RD, FUNCT3, RS1, IMM_11_0 } from '../fields';

/** Generic I-Type instruction. */
export class IType extends Instruction {
  /** Instruction opcode. */
  readonly opcode: number;
  /** Instruction destination register. */
  readonly rd: number;
  /** Instruction function 3 value. */
  readonly funct3: number;
  /** Instruction source register 1. */
  readonly rs1: number;
  /** Instruction immediate expression. */
  readonly imm: Expression;

  /**
   * Creates a new generic I-Type instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   * @param opcode    - Instruction opcode.
   * @param rd        - Instruction destination register.
   * @param funct3    - Instruction function 3 value.
   * @param rs1       - Instruction source register 1.
   * @param imm       - Instruction immediate expresion.
   */
  constructor(
    debugInfo: DebugInfo,
    name: string,
    opcode: number,
    rd: number,
    funct3: number,
    rs1: number,
    imm: Expression
  ) {
    super(debugInfo, name);
    this.opcode = opcode;
    this.rd = rd;
    this.funct3 = funct3;
    this.rs1 = rs1;
    this.imm = imm;
  }

  /** {@inheritdoc} */
  build(pc: number): void {
    const imm = this.imm.build(pc, []);
    if (['srli', 'srai', 'slli'].indexOf(this.name) !== -1 && !between(imm, 0, 31))
      throw new BuildError(`shift amount ${imm} out of range, should be between [0, 31]`, this.debugInfo);
    else if (!between(imm, -2048, 2047))
      throw new BuildError(`immediate ${imm} out of range, should be between [-2048, 2047]`, this.debugInfo);
    this.code.set(OPCODE, this.opcode);
    this.code.set(RD, this.rd);
    this.code.set(FUNCT3, this.funct3);
    this.code.set(RS1, this.rs1);
    this.code.set(IMM_11_0, imm);
  }
}
