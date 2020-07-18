import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32F fadd.s instruction. */
export class FADDS extends RType {
  /**
   * Creates a new RISC-V RV32F fadd.s instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'fadd.s', 0x53, rd, 0x7, rs1, rs2, 0x0);
  }
}
