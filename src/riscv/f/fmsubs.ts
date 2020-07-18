import { R4Type } from '../base/r4type';
import { DebugInfo } from '../../types';

/** RISC-V RV32F fmsub.s instruction. */
export class FMSUBS extends R4Type {
  /**
   * Creates a new RISC-V RV32F fmsub.s instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   * @param rs3       - Source register 3.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number, rs3: number) {
    super(debugInfo, 'fmsub.s', 0x47, rd, 0x7, rs1, rs2, 0x0, rs3);
  }
}
